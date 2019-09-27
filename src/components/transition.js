import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group'

class Transition extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shouldAnimate: this.props.shouldAnimate,
      timeout: this.props.shouldAnimate ? 500 : 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (this.props.shouldAnimate !== nextProps.shouldAnimate) {
      console.log('animate')
      this.setShouldAnimate(nextProps.shouldAnimate)
    }
  }

  setShouldAnimate (shouldAnimate) {
    console.log('set')
    this.setState({
      shouldAnimate: shouldAnimate,
      timeout: shouldAnimate ? 500 : 0
    })
  }

  getTransitionStyles (state) {
    console.log(state)
    const timeout = this.state.timeout
    if (state === 'entering') {
      return {
        position: 'absolute',
        opacity: 0
      }
    } else if (state === 'entered') {
      return {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1
      }
    } else if (state === 'exiting') {
      return {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 0
      }
    } else if (state === 'exited') {
      return {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 0
      }
    }
  }

  render () {
    const { children, location } = this.props
    // const timeout = shouldAnimate ? 500 : 0

    return (
      <TransitionGroup>

        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: this.state.timeout,
            exit: this.state.timeout
          }}
          // mountOnEnter={true}
          // unmountOnExit={true}
          enter={this.state.shouldAnimate}
          exit={this.state.shouldAnimate}
        >
          {status => (
            <div
              id='page-wrap'
              style={{
                ...this.getTransitionStyles(status),
                padding: '0px 30px'
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
