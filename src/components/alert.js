import { Fragment } from 'react'
import { connect } from 'react-redux'


function Alert({ alert }) {

    const displayAlert = () => {

        if (alert !== null) {
            return (
                <div className={`rounded-md bg-${alert.alertType}-50 p-4`}>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </div>
                        <div className="ml-3">
                            <p className={`text-sm font-medium text-${alert.alertType}-800`}>{alert.msg}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Fragment></Fragment>
            )
        }
    }

    return (
        <Fragment>
            {displayAlert()}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    alert: state.Alert.alert
})

export default connect(mapStateToProps)(Alert)