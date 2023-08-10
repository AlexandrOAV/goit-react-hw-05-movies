const { Link } = require("react-router-dom")

const NotFaund = () => {
    return (<div>
  <h1> SORRY!!! PAGE NOT FAUND!</h1>
        <p>PLease, go to <Link to={'/'}>Home page</Link> </p>
    </div>

    )
}
export default NotFaund;