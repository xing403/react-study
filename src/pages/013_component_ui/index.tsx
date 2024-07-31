import { Button, InputNumber, Select } from 'antd'

function ComponentUIDemo() {
  const { Option } = Select
  return (
    <div>
      <Button>hello this is antd button</Button>
      <InputNumber addonAfter={<Select defaultValue="USD" style={{ width: 60 }}>
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
        <Option value="CNY">¥</Option>
      </Select>} defaultValue={100} />

    </div>
  )
}

export default ComponentUIDemo
