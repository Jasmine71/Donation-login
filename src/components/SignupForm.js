import React from "react";
import { Button, Form, Input, InputNumber, message, Modal, Select } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  CompassOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { signup } from "../utils";

const { Option } = Select;

class SignupForm extends React.Component {
  formRef_ngo = React.createRef();
  formRef_donor = React.createRef();

  state = {
    //弹窗
    displayModal_ngo: false,
    displayModal_donor: false,
    asNGO: false,
    loading_ngo: false,
    loading_donor: false,
  };

  signupOnclick_ngo = () => {
    this.setState({
      displayModal_ngo: true,
      asNGO: true,
    });
  };

  signupOnclick_donor = () => {
    this.setState({
      displayModal_donor: true,
      asNGO: false,
    });
  };

  handleCancel_ngo = () => {
    this.setState({
      displayModal_ngo: false,
    });
  };

  handleCancel_donor = () => {
    this.setState({
      displayModal_donor: false,
    });
  };

  onFinish_ngo = () => {
    this.setState({
      displayModal_ngo: false,
    });
  };

  onFinish_donor = () => {
    this.setState({
      displayModal_donor: false,
    });
  };

  handleSubmit_ngo = async () => {
    const formInstance = this.formRef_ngo.current;
    try {
      await formInstance.validateFields();
    } catch (error) {
      return;
    }

    this.setState({
      loading_ngo: true,
    });

    try {
      await signup(formInstance.getFieldsValue(true), this.state.asNGO);
      message.success("Sign Up Successfully!");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading_ngo: false,
      });
    }
  };

  handleSubmit_donor = async () => {
    const formInstance = this.formRef_donor.current;
    try {
      await formInstance.validateFields();
    } catch (error) {
      return;
    }

    this.setState({
      loading_donor: true,
    });

    try {
      await signup(formInstance.getFieldsValue(true), this.state.asNGO);
      message.success("Sign Up Successfully!");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading_donor: false,
      });
    }
  };

  render = () => {
    return (
      <>
        <Button type="danger" size={"middle"} onClick={this.signupOnclick_ngo}>
          Be NGO
        </Button>

        <Button
          type="danger"
          size={"middle"}
          onClick={this.signupOnclick_donor}
        >
          Be Donor
        </Button>

        {/* ngo modal */}
        <Modal
          title="SIGN UP AS NGO"
          visible={this.state.displayModal_ngo}
          onCancel={this.handleCancel_ngo}
          footer={null}
          destroyOnClose={true}
        >
          <Form
            name="normal_signup"
            ref={this.formRef_ngo}
            initialValues={{ remember: true }}
            onFinish={this.onFinish_ngo}
          >
            {/* email */}
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Username"
                disabled={this.state.loading_ngo}
              />
            </Form.Item>

            {/* password */}
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                placeholder="Password"
                disabled={this.state.loading_ngo}
              />
            </Form.Item>

            {/* username */}
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input your user name!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Name"
                disabled={this.state.loading_ngo}
              />
            </Form.Item>

            {/* phone number */}
            <Form.Item
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Contact"
                disabled={this.state.loading_ngo}
              />
            </Form.Item>

            {/* address */}
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input
                prefix={<HomeOutlined />}
                placeholder="Address"
                disabled={this.state.loading_ngo}
              />
            </Form.Item>
            {/* categories */}
            <Form.Item
              name="prefCategory"
              rules={[
                {
                  required: true,
                  message: "Please selct one pick-up category!",
                },
              ]}
            >
              <Select defaultValue={"Pick-up category"}>
                <Option value="Food">Food</Option>
                <Option value="Clothes">Clothes</Option>
                <Option value="Electronics">Electronics</Option>
              </Select>
            </Form.Item>

            {/* preffered pick-up radius */}
            <Form.Item
              name="distance"
              rules={[
                {
                  required: true,
                  message: "Please input preffered pick-up distance!",
                },
              ]}
              label="Pick-up distance"
            >
              <InputNumber
                prefix={<CompassOutlined />}
                disabled={this.state.loading_ngo}
                addonAfter="KM"
                defaultValue={0}
              />
            </Form.Item>

            {/* prefered pick-up weight */}
            <Form.Item
              name="prefWeight"
              rules={[
                {
                  required: true,
                  message: "Please input preffered pick-up weight!",
                },
              ]}
              label="Pick-up weight"
            >
              <InputNumber
                prefix={<ShoppingOutlined />}
                disabled={this.state.loading_ngo}
                addonAfter="KG"
                defaultValue={0}
              />
            </Form.Item>

            <Button
              type="primary"
              disabled={this.state.loading_ngo}
              onClick={this.handleSubmit_ngo}
            >
              Submit
            </Button>
          </Form>
        </Modal>

        {/* donor */}
        <Modal
          title="SIGN UP AS DONOR"
          visible={this.state.displayModal_donor}
          onCancel={this.handleCancel_donor}
          footer={null}
          destroyOnClose={true}
        >
          <Form
            name="normal_signup"
            ref={this.formRef_donor}
            initialValues={{ remember: true }}
            onFinish={this.onFinish_donor}
          >
            {/* email */}
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Username"
                disabled={this.state.loading_donor}
              />
            </Form.Item>

            {/* password */}
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                placeholder="Password"
                disabled={this.state.loading_donor}
              />
            </Form.Item>

            {/* username */}
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input your user name!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Name"
                disabled={this.state.loading_donor}
              />
            </Form.Item>

            {/* phone number */}
            <Form.Item
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Contact"
                disabled={this.state.loading_donor}
              />
            </Form.Item>

            {/* address */}
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input
                prefix={<HomeOutlined />}
                placeholder="Address"
                disabled={this.state.loading_donor}
              />
            </Form.Item>

            <Button
              type="primary"
              disabled={this.state.loading_donor}
              onClick={this.handleSubmit_donor}
            >
              Submit
            </Button>
          </Form>
        </Modal>
      </>
    );
  };
}

export default SignupForm;
