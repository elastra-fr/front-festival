import process from 'process';



const production = {
     url: ''
};
const development = {
    url: 'http://festival.local/'

};
export const config = process.env.NODE_ENV === 'development' ? development : production;

