import PropTypes from 'prop-types';


const CartList = ({ title }) => {
    return (
        <li>{title}</li>
    )
}

CartList.propTypes = {
    title: PropTypes.string
}

export default CartList;