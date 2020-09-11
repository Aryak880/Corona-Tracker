import React from 'react';
import {Cards, Chart, CountryPicker} from '../Component';
import { fetchData }  from '../api';
import styles from './App.module.css';


class Home extends React.Component{
    
        state = {
            data: {},
            country: '',
        }

    async componentDidMount(){
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData });
    }

    handelCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        console.log(fetchedData);

        this.setState({ data: fetchedData, country: country });
    }


    render(){

        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handelCountryChange={this.handelCountryChange}/>
                <Chart data={data} country={country} />                
            </div>
        );
    }
}

export default Home;