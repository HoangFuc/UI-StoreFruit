import { connect } from 'react-redux';
import Cart from '../Cart/Cart';
import { addProduct } from '../store/reducers/cart';

const mapStateToProps = (state) => ({
    items: state.items
});

const mapActionToProps = () => ({
    addProduct
})

export default connect(mapStateToProps, mapActionToProps)(Cart)