import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Checkbox,
  Radio,
  Space,
} from "antd";
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

class SignupForm extends React.Component {
  formRef = React.createRef();

  state = {
    //弹窗
    displayModal_ngo: false,
    displayModal_donor: false,
    asNGO: false,
    loading: false,
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
    {
      this.setState({
        displayModal_ngo: false,
      });
    }
  };

  onFinish_donor = () => {
    {
      this.setState({
        displayModal_donor: false,
      });
    }
  };

  handleSubmit_ngo = async () => {
    const formInstance = this.formRef.current;
    try {
      await formInstance.validateFields();
    } catch (error) {
      return;
    }

    this.setState({
      loading: true,
    });

    try {
      await signup(formInstance.getFieldsValue(true), this.state.asNGO);
      message.success("Sign Up Successfully!");
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  handleSubmit_donor = () => {};

  render = () => {
    return (
      <>
        <Button type="danger" size={"middle"} onClick={this.signupOnclick_ngo}>
          As NGO
        </Button>

        <Button
          type="danger"
          size={"middle"}
          onClick={this.signupOnclick_donor}
        >
          As Donor
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
            initialValues={{ remember: true }}
            onFinish={this.onFinish_ngo}
            // preserve={flase}
          >
            {/* email */}
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                disabled={this.state.loading}
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
                disabled={this.state.loading}
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
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* phone number */}
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Phone Number"
                disabled={this.state.loading}
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
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* preffered pick-up radius */}
            <Form.Item
              name="radius"
              rules={[
                {
                  required: true,
                  message: "Please input preffered pick-up radius!",
                },
              ]}
              label="Pick-up radius"
            >
              <InputNumber
                prefix={<CompassOutlined />}
                // placeholder="Pick-up radius"
                disabled={this.state.loading}
                addonAfter="KM"
                defaultValue={0}
              />
            </Form.Item>

            {/* prefered pick-up weight */}
            <Form.Item
              name="weight"
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
                // placeholder="Pick-up weight"
                disabled={this.state.loading}
                addonAfter="KG"
                defaultValue={0}
              />
            </Form.Item>

            <Button
              type="primary"
              disabled={this.state.loading}
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
            initialValues={{ remember: true }}
            onFinish={this.onFinish_donor}
            // preserve={flase}
          >
            {/* email */}
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                disabled={this.state.loading}
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
                disabled={this.state.loading}
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
                disabled={this.state.loading}
              />
            </Form.Item>

            {/* phone number */}
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Phone Number"
                disabled={this.state.loading}
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
                disabled={this.state.loading}
              />
            </Form.Item>

            <Button
              type="primary"
              disabled={this.state.loading}
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

// {
//   /* status */
// }
// <Form.Item
//   name="radio-button"
//   label="Status"
//   rules={[{ required: true, message: "Please pick one!" }]}
// >
//   <Radio.Group>
//     <Radio value="Donator" onChange={this.handleDonatorChange}>
//       Donator
//     </Radio>
//     <Radio value="NGO" onChange={this.handleNGOChange}>
//       NGO
//     </Radio>
//   </Radio.Group>
// </Form.Item>;
