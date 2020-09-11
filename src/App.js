// //SOAL 1 BMI
// import React, {Component} from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Alert from './Components/Alert';
// class App extends Component {
//   constructor(bmi){
// 		super(bmi);
// 		this.state = {
// 			beratbadan: '60',
// 			tinggibadan: '170',
// 			hasil: "BERAT BADAN ANDA IDEAL",
// 		};

// 		this.BeratChange = this.BeratChange.bind(this);
// 		this.TinggiChange = this.TinggiChange.bind(this);
// 		this.hitungBmi = this.hitungBmi.bind(this);
// 	}

// 	BeratChange(event) {
// 		this.setState({beratbadan: event.target.value})
// 	}

// 	TinggiChange(event){
// 		this.setState({tinggibadan: event.target.value})
// 	}
	
// 	hitungBmi = (event) => {
// 		let tinggibadan = this.state.tinggibadan;
// 		let beratbadan = this.state.beratbadan;

// 		// rumus
// 		tinggibadan = 100; // Untuk mengkonversi CM KE M
// 		let hasil = beratbadan / (tinggibadan*tinggibadan);

// 		// ifelse
// 		if(hasil <= 18.5){
// 			this.setState({hasil: "ANDA KEKURANGAN BERAT BADAN"}) // menggunakan setState untuk mengubah state
// 		} else if(hasil >= 18.5 && hasil <= 22.9){
// 			this.setState({hasil: "BERAT BADAN ANDA IDEAL"})
// 		} else if(hasil >= 23 && hasil <= 24.9){
// 			this.setState({hasil: "ANDA KELEBIHAN BERAT BADAN"})
// 		} else{
// 			this.setState({hasil: "AWAS ANDA OBESITAS !"})
// 		}
// 			event.preventDefault();
// 	}
// render(){
// 		return(
// 			<div className="card col-sm-5 mx-auto m-5">
// 				<div className="card-header bg-danger text-center text-white">
// 					<h4>Body Mass Index</h4>
// 				</div>
// 				<div className="card-body">
// 				<div class="input-group mb-2">
// 						<div class="input-group-prepend">
// 						<label class="input-group-text" >Berat (kg) : </label>
// 						</div>
// 						<input type="number" className="form-control" value={this.state.beratbadan} onChange={this.BeratChange}/>
// 					</div>
// 					<div class="input-group mb-2">
// 						<div class="input-group-prepend">
// 						<label class="input-group-text" >Tinggi (cm) : </label>
// 						</div>
// 						<input type="number" className="form-control" value={this.state.tinggibadan} onChange={this.TinggiChange}/>
// 					</div>
// 				</div>
// 				<div className="card-footer">
// 					<button className="form-control btn btn-info" onClick={this.hitungBmi} >
// 						Hitung
// 					</button>
// 					<center><h5 className="text-center mt-4 btn-success">Hasil</h5></center>
//           <input className="form-control mb-1" value={this.setState.hasil} readOnly/>
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default App;

//SOAL 2
// import library
import React, {Component} from 'react';
// class
class App extends Component {
    constructor(bank){
        super(bank);
        this.state = {
            nominal: '',
            bunga: '',
            periode: '12',
            hasilAngsuran: 'Angsuran per bulan:'
        };
        this.nominalChange = this.nominalChange.bind(this);
        this.bungaChange = this.bungaChange.bind(this);
        this.periodeChange = this.periodeChange.bind(this);
    }
nominalChange(event){
        this.setState({nominal: event.target.value})
    }
bungaChange(event){
        this.setState({bunga: event.target.value})
    }
periodeChange(event){
        this.setState({periode: event.target.value})
    }
hitung = (event)  => {
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;

        // rumus
        let b = bunga / 100;
        let bungaa = (nominal * b) / periode; 
        let pokokk = nominal / periode;
        let angsurann = pokokk + bungaa;

        //output
        this.setState({hasilAngsuran: "Angsuran per bulan: Rp. " + angsurann})
        event.preventDefault();
    }
render(){
        return(
            <div className="card col-sm-5 mx-auto m-5">
				<div className="card-header text-center bg-info text-white">
					<h4>Cicilan Bank</h4>
				</div>
				<div className="card-body">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                        <label class="input-group-text" >Nominal : </label>
                        </div>
                        <input type="number" className="form-control" onChange={this.nominalChange}/>
                    </div>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                        <label class="input-group-text" >Bunga (%) : </label>
                        </div>
                        <input type="number" className="form-control" onChange={this.bungaChange}/>
                    </div>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                        <label class="input-group-text" >Periode : </label>
                        </div>
                        <input type="number" className="form-control" onChange={this.periodeChange}/>
                    </div>
				</div>
				<div className="card-footer">
					<button className="form-control btn btn-warning text-white" onClick={this.hitung}>
						Hitung
					</button>
					<center><h5 className="text-center mt-4 btn-success">Hasil</h5></center>
                    <input className="form-control mb-1" value={this.state.hasilAngsuran} readOnly/>
				</div>
			</div>
        );
    }
}
export default App;
