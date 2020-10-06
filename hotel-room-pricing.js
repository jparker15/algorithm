/**
 * Ex. [ [ {room: ‘101’, renter: ‘bill’, price: 50 }}, { room: ‘102’, renting: null, price: 60 }, ... ], [ {room: ‘202’, …}, …], [...], [...] ]
 */
//[{}]
//main array, 4 sub arrays, each elem is object,
// nested for loop
/**
 * Room prices equation; Price = 
( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)

Room 202 = ( 50*2 ) + ( 10*2 - 10 ) + 45 = $155
 */
// deposit $45, floor cost 50, room cost 10

const deposit = 45,
    floorCost = 50,
    roomCost = 10;

const pricing = (floNum,roomNum) =>{
    let data = [];

    for (let i = 1; i <= floNum; i++) {

        const floPrice = (floorCost * i );

        data.push([`floor ${i}`])

        for (let j = 1; j <= roomNum; j++) {
            
            const rooPrice = (roomCost * j - roomCost);

            const total = floPrice + rooPrice + deposit;

            console.log(data[i-1], i , j);

            data[i-1].push({room:`${i * 100+ j}`, price: total, renter:null })
            // console.log(i,j,total);
            // console.log(floPrice, rooPrice)
        }
        
    }
    console.log(data);
}

pricing(4,4)