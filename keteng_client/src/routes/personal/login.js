import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Modal } from 'antd';
import { Link } from "react-router-dom";
import md5 from "blueimp-md5";
import { login } from "../../api/person";

let loginFial = () => {
    Modal.error({
        title: 'Login error',
        content: '账户或者密码不正确',
    });
}


class Login extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="personLoginBox">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                        Or <Link to="/person/register">register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let { username, password } = values;
                password = md5(password);
                let res = await login({
                    username,
                    password
                })
                if (parseInt(res.code) === 0)
                    this.props.history.go(-1)
                else
                    loginFial();
            }
        });
    }
}
export default Form.create()(connect()(Login));