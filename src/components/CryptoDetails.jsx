import { useState } from 'react'
import HTMLReactParses from 'html-react-parser'
import { useParams } from 'react-router-dom'

import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FoundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'


const { Title, Text} = Typography
const { Option } = Select

const CryptoDetails = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState('7d')
    const {data, isFetching } = useGetCryptoDetailsQuery(coinId)

    return (
        <div>
            
        </div>
    )
}

export default CryptoDetails
