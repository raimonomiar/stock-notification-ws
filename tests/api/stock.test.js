const sinon = require('sinon');
const axios = require('axios');
const { expect } = require('chai');
const config = require('config');
const { getStock } = require('../../src/api/stock');

const {
  api: {
    url,
    pageLimit,
    offset,
  },
} = config;

describe('getStock', () => {
  let axiosPostStub;

  beforeEach(() => {
    axiosPostStub = sinon.stub(axios, 'post');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call axios.post with the correct arguments and return a JSON string', async () => {
    const mockData = {
      stockInfo: {
        symbol: 'AAPL',
        price: 150,
        volume: 1000,
      },
    };
    axiosPostStub.resolves({ data: mockData });

    const result = await getStock();

    expect(axiosPostStub.calledOnceWithExactly(url, {
      fromdate: '',
      toDate: '',
      stockSymbol: '',
      offset,
      limit: pageLimit,
    })).to.equal(true);
    expect(result).to.be.a('string');
    expect(result).to.equal(JSON.stringify(mockData));
  });

  it('should throw an error if there is an error calling axios.post', async () => {
    const mockError = new Error('Failed to fetch stock data');
    axiosPostStub.rejects(mockError);

    try {
      await getStock();
    } catch (error) {
      expect(error).to.equal(mockError);
    }
  });
});
