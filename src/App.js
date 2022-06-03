import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import logo_img from './imagem/bola1.png';
import Navbar from './Corpo/Navbar';
import { App2 } from "./Corpo/Navbar.jsx";
import Footer from "./Corpo/Footer";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Select from 'react-select'
import './CadastraCampo.css'


import field1 from "./imagem/field1.jpg";
import field2 from "./imagem/field2.jpg";
import field3 from "./imagem/field3.jpg";

const options = ['Option 1', 'Option 2'];

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            camp_list:[
                
                {
                    "nome": "Prefeitura Municipal",
                    "telefone": "3722-2425",
                    "numero": "51",
                    "bairro": "Centro",
                    "rua": "Capituu",
                    "cep": "377777",
                    "valor": "60"
                },
                {
                    "nome": "Futpoços Futebol Society",
                    "telefone": "(35) 3715-4260",
                    "numero": "329",
                    "bairro": "Centro",
                    "rua": "R. Pernambuco",
                    "cep": "37701-021",
                    "valor": "100"
                },
                {
                    "nome": "Society Floresta",
                    "telefone": "(35) 3712-6060",
                    "numero": "56 ",
                    "bairro": "Parque Vivaldi Leite Ribeiro",
                    "rua": "Av. Ver. Edmundo Cardilo",
                    "cep": "37706-106",
                    "valor": "120"
                },
                {
                    "nome": "Chang Society",
                    "telefone": "(XX)XXXX-XXXX",
                    "numero": "950 ",
                    "bairro": "Bortolan Sul",
                    "rua": "Av. Sinésio do Lago",
                    "cep": "XXXX-XX",
                    "valor": "100"
                },
                {
                    "nome": "Society Barcelona",
                    "telefone": "(35) 99203-7763",
                    "numero": "39 ",
                    "bairro": "Região Urbana Homogênea IV",
                    "rua": "R. Antônio Matavelli Sobrinho",
                    "cep": "37700-390",
                    "valor": "110"
                },
                {
                    "nome": "Poços de Caldas Futebol Clube",
                    "telefone": "(35) 3722-8800",
                    "numero": "710 ",
                    "bairro": "Centro",
                    "rua": "Av. João Pinheiro",
                    "cep": "37701-386",
                    "valor": "100"
                },
                {
                    "nome": "Escola de Futebol Vulcão Mania",
                    "telefone": "(35) 3114-9417",
                    "numero": "1253 ",
                    "bairro": "Centro",
                    "rua": "Av. João Pinheiro",
                    "cep": "37701-387",
                    "valor": "100"
                },

            ]
        }
        this.addCampo = this.addCampo.bind(this)
    }
    

    addCampo(campo){
        alert("Adicionando no buffer",campo)
        let aux = this.state.camp_list

        aux.push(campo)
        this.setState({
            camp_list:aux
        })

        console.log(JSON.stringify(this.state.camp_list,null,4))
    }
    

    render() {
        return (
            <Router>
              <Navbar />
                <Routes>
                    <Route path="/" element={<Index/>} />
                    <Route path="/cadastracampo" element={<CadastraCampo addCampo={this.addCampo}/>} />
                    <Route path="/listacampos" element={<ListaCampos campos={this.state.camp_list}/>}/>
                    <Route path="/alugar" element={<Alugar campos={this.state.camp_list}/>}/>
                </Routes>
              <Footer />
            </Router>
        );
    }

}



    

   



class Index extends React.Component {
    render() {
        return (
            <div className="app">
      
                <Body>
                </Body>
            </div>
            
            
        );

    }
}


function Body (){
    return(
        <div className="myBody">
            <div className="roww">
                <AcheCampo/>
                <AlugueCampo/>
            </div>
            <div>
                <SaibaMais>
                </SaibaMais>
            </div>
            
            
        </div>
    );
}

function AcheCampo(){
    return(
        <div className="ache_campo">
            <div className="img_ache_campo">
                <img src={field1} id="img_field1"></img>
            </div>
            <Link  to= "/listacampos" className="titulo_card">Ache um Campo</Link>
            <div className="text_card">
            Você que gosta de futebol, gostaria de alugar um campo perto de você com toda a qualidade oferecida?
Então veio ao lugar certo, aqui você encontra os melhores campos de futebol em sua cidade. Desde 
quadra/Society a Campo.
            </div>
        </div>
    );
}
function AlugueCampo(){
    return(
        <div className="alugue_campo">
            <div className="img_alugue_campo">
            <img src={field2} id="img_field2"></img>
            </div>
            <Link  to= "/cadastracampo" className="titulo_card">Alugue o seu Campo</Link>
            <div className="text_card">
                Você que possui um campo ou uma quadra de futebol e gostária de ter mais clientes?? Pois aqui você tera
                mais visualizações. Nessa plataforma onde varios passam diariamente poderam te telefonar para alugar o
                seu campo/quadra, o que está esperando venha se cadastrar logo e ponha para alugar.            
            </div>
        </div>
    );
}

function SaibaMais(){
    return(
        <div className="saiba_mais">
            <div className="img_alugue_campo2">
            <img src={field3} id="img_field3"></img>
            </div>
            <div className="titulo_card">Como Funciona?</div>
            <div className="text_card">
                Nesse site você encontra os melhores campos de futebol que existem em sua cidade. É so clicar em Ache um campo
                e navegue pelo menu de campos oferecidos em nosso site e caso você seja dono clique em alugue o seu campo para 
                se cadastrar e anuncie seu campo.
            </div>
        </div>
    );
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nome: '',
            telefone:'',
            numero:'',
            bairro:'',
            rua:'',
            cep:'',
            valor:''
        
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });

      }

    handleSubmit(event) {
        
        let aux = this.state
        //Aux é o objeto passado pelo formulario
        this.props.addCampo(aux)
        event.preventDefault();
        
    }

    render() {
        return (
            <div >

                <form onSubmit={this.handleSubmit } className="collum">
                <label>
                    Nome:
                </label>
                <input type="text" placeholder="Digite seu Nome" className='digita' name="nome" value={this.state.nome} onChange={this.handleInputChange}/><br/>

                <label>
                    Telefone:
                </label>
                <input type="text" placeholder="Digite seu Telefone" className='digita' name="telefone" value={this.state.telefone} onChange={this.handleInputChange}/><br/>

                <label>
                    Bairro:
                </label>
                <input type="text" placeholder="Digite o bairro do seu campo" className='digita' name="bairro" value={this.state.bairro} onChange={this.handleInputChange}/><br/>

                <label>
                    Rua:
                </label>
                <input type="text" placeholder="Digite a rua do seu campo" className='digita' name="rua" value={this.state.rua} onChange={this.handleInputChange}/><br/>

                <label>
                    Número:
                </label>
                <input type="number" placeholder="Digite o numero do seu campo" className='digita' name="numero" value={this.state.numero} onChange={this.handleInputChange}/><br/>

                <label>
                    Cep:
                </label>
                <input type="text" placeholder="Digite o CEP" className='digita' name="cep" value={this.state.cep} onChange={this.handleInputChange}/><br/>

                <label >Preço por hora: </label>
                <input className='digita' type="number" name="valor" value={this.state.valor} id="input_value" onChange={this.handleInputChange} placeholder="Ex: 200"></input><br/>

                <input type="submit" className='voltar' value="Enviar" />
            </form>
            <div href="/">
            
            <Link className='button1' to= "/">  Voltar  </Link>
            </div>

            </div>
            
        );
    }

}



class CadastraCampo extends React.Component{
    render(){
        return(
            <div >
                <div>

                </div>
                <div className="bottom_container">
                
                    <div className="left_bar">
                    <h1 className='text'>Cadastre seu Campo</h1>
                        <MyForm addCampo={this.props.addCampo}></MyForm>
                    </div>
                </div>

            </div>
            
        );
    }

}

function ListaCampos(props) {


    const listItems = props.campos.map((item) =>
        <Campo info={item}></Campo>
    );

    return(
        <div >
          <h1 className='text1'>Escolha o Campo</h1>
            <div  className="listador_de_campos">
                
                    {listItems}<p></p><br></br>
                    <div></div>
                    <Link className='button2' to= "/alugar"><center>  Alugar  </center></Link><br></br>
                <div >
                <Link className='button3' to= "/">  Voltar  </Link>
                </div>
                    
            </div>
            
            
        </div>

    );
}

function Campo(props) {
    return(
        <div>
        <Col sm="1" className="col-md-3 mt-md-4 mb-0">
        <Card body>
       
            <img src={field1} id="img_field1" width="29" height="20"></img>
        
        <center>
        <div >{props.info.nome}</div>
        <div >
            <div>Telefone: {props.info.telefone}</div>
            <div>Endereço: {props.info.bairro+","+props.info.rua + " " + props.info.numero + ","+ props.info.cep}</div>
            <div>Valor: R${props.info.valor} /hora</div>
            
        </div>
       
        </center>
        </Card>
      </Col>
      
      </div>
  
    ); 
}


function Alugaar(props) {
    return(
        <div>
        <div >{props.info.nome}</div>
      </div>
  
    ); 
}
function Alugar(props) {

    const listItems = props.campos.map((item) =>
    <Alugaar info={item}></Alugaar>
);

const options = []

listItems.forEach(element => {
    console.log (element.props.info.nome)
    options.push({value: element.props.info.nome, label: element.props.info.nome} )
});

console.log(options)

  return(
      
      <div >
        <h1 className='text1'>Alugando Campo</h1>
    
          <div  className="listador_de_campos">
          <form  className="collumm">
                <label>
                 Escolha um Campo
                </label>
                <Select options={options} className='digita'/><br/>
                <label>
                    Nome:
                </label>
                <input type="text" placeholder="Digite seu Nome" className='digita' name="nome" /><br/>
                <label>
                    Data:
                </label>
                <input type="date" className='digita'/>
                <label>
                    Hora:
                </label>
                <input type="time"className='digita'/>

               
                <input type="submit" className='voltar' value="Alugar" />
            </form>
          </div>
          
      </div>

  );

  }
  

export default App


