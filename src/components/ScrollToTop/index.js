import { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { getAllUrlParams } from "@/utils/url"
class ScrollToTop extends Component {
	componentDidMount() {
		const lang = getAllUrlParams().lang ? getAllUrlParams().lang : 'zh-CN';
		if (lang === 'en-US') {
			document.getElementById('root').className = "oit--en"
		} else if (lang === 'zh-CN') {
			document.getElementById('root').className = "oit--cn"
		} else {
			document.getElementById('root').className = ""
		}
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			window.scrollTo(0, 0)
		}
	}

	render() {
		return (
			this.props.children
		);
	}
}

export default withRouter(ScrollToTop);