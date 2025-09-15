import { Component } from "react";
import { Button, Input, Select, Space, Table, Tag } from "antd";

const { Option } = Select;

const data = [
  {
    key: "1",
    stt: 1,
    maSV: "SV001",
    tenSV: "Nguyễn Văn A",
    ngaySinh: "21/12/2023",
    email: "nva@gmail.com",
    trangThai: "Đang hoạt động",
  },
  {
    key: "2",
    stt: 2,
    maSV: "SV002",
    tenSV: "Nguyễn Thị B",
    ngaySinh: "21/11/2022",
    email: "ntb@gmail.com",
    trangThai: "Ngừng hoạt động",
  },
];

const columns = [
  { title: "STT", dataIndex: "stt", key: "stt" },
  { title: "Mã sinh viên", dataIndex: "maSV", key: "maSV" },
  { title: "Tên sinh viên", dataIndex: "tenSV", key: "tenSV" },
  { title: "Ngày sinh", dataIndex: "ngaySinh", key: "ngaySinh" },
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "Trạng thái",
    dataIndex: "trangThai",
    key: "trangThai",
    render: (text: string) => (
      <Tag color={text === "Đang hoạt động" ? "green" : "red"}>{text}</Tag>
    ),
  },
  {
    title: "Chức năng",
    key: "action",
    render: () => (
      <Space>
        <Button style={{color: 'purple', border:'1px solid purple', backgroundColor: '#ebdff8ff'}}>Chặn</Button>
        <Button style={{color: 'orange', border:'1px solid orange', backgroundColor: '#f8f3dfff'}}>Sửa</Button>
        <Button style={{color: 'red', border:'1px solid red', backgroundColor: '#f8dfdfff'}}>Xóa</Button>
      </Space>
    ),
  },
];

export default class Layout extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 style={{fontWeight: 600}}>Quản lý sinh viên</h2>

            <div style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <Button type="primary" style={{marginLeft: 'auto'}}>Thêm mới sinh viên</Button>

                <div style={{display: 'flex', gap: '8px'}}>
                    <Select defaultValue="age" style={{ width: 160 }}>
                        <Option value="age">Sắp xếp theo tuổi</Option>
                        <Option value="name">Sắp xếp theo tên</Option>
                    </Select>

                    <Input.Search
                        placeholder="Tìm kiếm từ khóa theo tên hoặc email"
                        style={{ width: 300 }}
                    />
                </div>
            </div>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 2 }}
        />
      </div>
    );
  }
}