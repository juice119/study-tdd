import * as mongoose from 'mongoose';
// TODO 추후에 mongoose수
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
