import PropTypes from 'prop-types';


const CartList = ({ title }) => {
    // console.log(selectedCourses);

    // selectedCourses.map((course) => console.log(course.title))
    return (
        <li>{title}</li>
    )
}

CartList.propTypes = {
    title: PropTypes.string
}

export default CartList;