import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Card, Grid, Image, Button, Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/CartActions'
import { compose } from 'redux'
function All_users() {
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const detailhistory = useHistory();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/users/')
            .then(data => {
                const res = data.data.results
                console.log(res)
                setProduct(res)
            })
    }, [])
    return (
        <div>
            <Grid>
                <Grid.Row columns={3}>
                    {Product.map(datas => (
                        <Grid.Column key={datas.id}>
                            <Card centered>
                                <Image src={datas.image.medium_square_crop} />
                                <Card.Content>
                                    <Card.Header>{datas.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{datas.price} Bath.</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Button animated='vertical' onClick={() => detailhistory.push(`/product/${datas.id}/`)}>
                                            <Button.Content hidden>Shop</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button>
                                        <Button animated='vertical' onClick={() => dispatch(addToCart({ ...datas, quantity: 1 }))}>
                                            <Button.Content hidden>Add to Cart</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='shop' />
                                            </Button.Content>
                                        </Button>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                </Card.Content>
                            </Card>
                            <br />
                        </Grid.Column>
                    )
                    )}
                </Grid.Row>
            </Grid>

        </div>
    )
}
export default All_users