import React from "react";
import { connect } from "react-redux";
import md5 from "blueimp-md5";
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    Modal
} from 'antd'
import { register } from "../../api/person";
import action from "../../store/action";

let loginFial = () => {
    Modal.error({
        title: 'Register error',
        content: '注册失败,请稍后尝试！',
    });
}


class Regiter extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        const { Option } = Select;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        return (
            <div className="personRegisterBox">
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item
                        label={
                            <span>
                                Username&nbsp;
                        </span>
                        }
                    >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [
                                { required: true, message: 'Please input your phone number!' },
                            ],
                        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
              </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                values.password = md5(values.password)
                values.confirm = md5(values.confirm)
                let result = await register(values);
                if (result.code === 0) {
                    // this.props.queryBaseInfo()该不该调用???
                    this.props.history.push("/person")
                    return;
                }
                loginFial()
            }
        })
    }
    handleConfirmBlur = (ev) => {

    }
}
export default Form.create()(connect(null, action.personAction)(Regiter));