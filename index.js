import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import resolver from './resolver.js'
import schema from './schema.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Server is up')
})

const root = resolver

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(29963, () => console.log('Running at: http://localhost:29963'))