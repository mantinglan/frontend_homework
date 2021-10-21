function transformer(userIds, orderIds, userOrders, userData, orderData){
    let arr =[]
    userIds.forEach(userId => {
      let obj = {
        user:{
          id: userId,
          name: userData[userId]
        },
        orders:[]
      }
      userOrders.find(x => x.userId === userId).orderIds.forEach(index => {
        let order = {
          id: index,
          name: orderData[index].name,
          price: orderData[index].price,
        }
        obj.orders.push(order)
      })
      arr.push(obj)
    })
    return arr
  }
  
  const userIds = ['U01', 'U02', 'U03']
  const orderIds = ['T01', 'T02', 'T03', 'T04']
  const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
  ]
  const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
  const orderData = {
  'T01': { name: 'A', price: 499 },
  'T02': { name: 'B', price: 599 },
  'T03': { name: 'C', price: 699 },
  'T04': { name: 'D', price: 799 },
  }
  // const result = [
  //   {
  //    user: { id: 'U01', name: 'Tom' },
  //    orders: [
  //        { id: 'T01', name: 'A', price: 499 },
  //        { id: 'T02', name: 'B', price: 599 },
  //    ],
  //   },
  //   ...,
  //   ]
  let result = transformer(userIds, orderIds, userOrders, userData, orderData)
  