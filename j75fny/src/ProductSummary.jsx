import React from 'react'

const ProductSummary = () => {
	const items = [
		{ product: 'IPhone', price: 334000 },
		{ product: 'Samsung', price: 15500 },
		{ product: 'Redmi', price: 13000 },
	]
	return (
		<div>
			<div className='container'>
				{items.map((item, idx) => (
					<div className='item_container' key={idx}>
						<div className='item_detail'>
							<p className='product_name'>{item.product}</p>
							<p className='product_price'>{item.price}&#8378;</p>
						</div>
						<div className='items_summaries'>
							<button type='button' className='item_controlled_button'>
								-
							</button>
							<input className='input' type='number' placeholder='1' />
							<button type='button' className='item_controlled_button'>
								+
							</button>
						</div>
					</div>
				))}
			</div>

			<br />
			<br />

			<div className='container'>
				<div className='content'>
					<span className='content_price'>
						<p className='total_string'>Total Price: </p>{' '}
						<p className='summary'>{12000}&#8378;</p>
					</span>
					<button className='button'>Checkout</button>
				</div>
			</div>
		</div>
	)
}

export default ProductSummary
