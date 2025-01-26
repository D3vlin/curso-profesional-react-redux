import { StarOutlined } from "@ant-design/icons"
import { Card } from "antd"
import Meta from "antd/lib/card/Meta"


const PokemonCard = ({ name, image, types }) => {
    const typeString = types.map(element => element.type.name).join(', ')

    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined />}
        >
            <Meta description={typeString} />
        </Card>
    )
}

export { PokemonCard }