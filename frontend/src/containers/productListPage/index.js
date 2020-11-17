import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../../actions';
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig';
import './style.css'
function ProductList(props) {

    const product = useSelector(state => state.product)
    const [priceRange, setPriceRange] = useState({
        under200: 200,
        under300: 300,
        under600: 600
    })

    const dispatch = useDispatch()
    useEffect(() => {
        // console.log(props)
        const { match } = props
        dispatch(getProductBySlug(match.params.slug))
    }, []);
    return (

        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className='card'>
                            <div className='cardHeader'>
                                <div>{props.match.params.slug} mobile under £{priceRange[key]}</div>
                                <button>View All</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div className='productContainer'>
                                            <div className='productImgContainer'>
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt=''></img>
                                            </div>
                                            <div className='productInfo'>
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <span>4.3</span>
                                                    <span>341</span>
                                                </div>
                                                <div className='productPrice'>{product.price}</div>
                                            </div>
                                        </div>)
                                }

                            </div>
                        </div>
                    )
                })
            }



        </Layout>
    )
}

export default ProductList
