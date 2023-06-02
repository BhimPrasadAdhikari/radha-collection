/*eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function ProductItem({product,addToCartHandler}) {
  return (
    <div className="card">
        <Link href={`/product/${product.slug}` }>
            <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
            >
            </img>
        </Link>
        
            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${product.slug}`}>
                    <h1 className='text-lg'>{product.name}</h1>
                </Link>
                <p className='mb-2'>{product.brand}</p>
                <p>{product.price}</p>
                <button
                 className="primary-button"
                 type="button"
                onClick={()=>addToCartHandler(product)}
                >add to cart</button>
            </div>
    </div>
  )
}

export default ProductItem