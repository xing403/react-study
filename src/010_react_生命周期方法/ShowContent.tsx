import React from "react";

interface ShowContentProps {
  num: number
}


export default class ShowContent extends React.Component<ShowContentProps> {
  constructor(props: ShowContentProps) {
    super(props)
  }

  render(): React.ReactNode {
    const { num } = this.props
    return (
      <span style={{ width: '200px', display: 'inline-block', textAlign: 'center' }}>{num}</span>
    )
  }
}
