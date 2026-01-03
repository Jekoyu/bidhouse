import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

async function main() {
  try {
    // 1. Login Admin
    let adminToken;
    try {
        const adminRes = await axios.post(`${BASE_URL}/auth/login`, {
            email: 'admin@bidhouse.com',
            password: 'admin123'
        });
        adminToken = adminRes.data.data.token;
        console.log('✅ Admin Logged In');
    } catch (e) {
        console.log('⚠️ Admin login failed, creating new admin...');
        // Create admin if not exists (might act as regular user first then update role in db if possible, 
        // but for now let's hope existing logic allows or fail)
        throw new Error('Admin login failed: ' + (e.response?.data?.message || e.message));
    }

    // 2. Register/Login Seller
    const sellerEmail = `seller_${Date.now()}@test.com`;
    await axios.post(`${BASE_URL}/auth/register`, {
        name: 'Seller',
        email: sellerEmail,
        password: 'password123',
        phone: '08111111111'
    });
    const sellerLogin = await axios.post(`${BASE_URL}/auth/login`, { email: sellerEmail, password: 'password123' });
    const sellerAuth = sellerLogin.data.data.token;
    console.log('✅ Seller Logged In');

    // 3. Create Item
    const itemRes = await axios.post(`${BASE_URL}/items`, {
        name: 'Test NaN Item',
        description: 'Testing Decimal fields',
        startingPrice: 500000,
        categories: [],
        images: []
    }, { headers: { Authorization: `Bearer ${sellerAuth}` } });
    const itemId = itemRes.data.data.id;
    console.log('✅ Item Created:', itemId);

    // 4. Approve Item (Admin)
    await axios.post(`${BASE_URL}/items/${itemId}/approve`, {}, {
        headers: { Authorization: `Bearer ${adminToken}` }
    });
    console.log('✅ Item Approved');

    // 5. Schedule Auction (Admin)
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 3600000); // +1 hour
    const auctionRes = await axios.post(`${BASE_URL}/auctions`, {
        itemId: itemId,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        startingPrice: 500000,
        buyNowPrice: 1000000
    }, { headers: { Authorization: `Bearer ${adminToken}` } });
    const auctionId = auctionRes.data.data.id;
    console.log('✅ Auction Scheduled:', auctionId);

    // 6. Start Auction (Admin)
    await axios.post(`${BASE_URL}/auctions/${auctionId}/start`, {}, {
        headers: { Authorization: `Bearer ${adminToken}` }
    });
    console.log('✅ Auction Started');

    // 7. Register/Login Bidder
    const bidderEmail = `bidder_${Date.now()}@test.com`;
    await axios.post(`${BASE_URL}/auth/register`, {
        name: 'Bidder',
        email: bidderEmail,
        password: 'password123',
        phone: '08222222222'
    });
    const bidderLogin = await axios.post(`${BASE_URL}/auth/login`, { email: bidderEmail, password: 'password123' });
    const bidderToken = bidderLogin.data.data.token;
    console.log('✅ Bidder Logged In');

    // 8. Place Bid
    await axios.post(`${BASE_URL}/bids`, {
        auctionId: auctionId,
        amount: 550000
    }, { headers: { Authorization: `Bearer ${bidderToken}` } });
    console.log('✅ Bid Placed');

    // 9. Inspect My Bids
    const myBidsRes = await axios.get(`${BASE_URL}/bids/my`, {
        headers: { Authorization: `Bearer ${bidderToken}` }
    });
    
    console.log('\n=== JSON RESPONSE FROM /bids/my ===');
    console.log(JSON.stringify(myBidsRes.data, null, 2));

  } catch (error) {
    console.error('❌ Error:', error.response ? error.response.data : error.message);
  }
}

main();
