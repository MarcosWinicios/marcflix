import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria(){
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [values, setValues] =   useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]:valor,
    })
  }

  function handleChange(infosDoEvento){
    const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
    const  {value} =  infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
    );
    
  }
  
  return(
    <PageDefault>
        <h1>Página de Cadastro de Categoria: {values.nome}</h1>
        <form 
          onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);
            setValues(valoresIniciais);
          }}
        >
          
          <FormField
            label="Nome da Categoria:"
            type="text"
            value={values.nome}
            onChange={handleChange}
            name="nome"

          />

          <FormField
            label="Descricão:"
            type="textArea" 
            value={values.descricao}
            onChange={handleChange}
            name="descricao"

          />
           <FormField
            label="Cor:"
            type="color"
            value={values.cor}
            onChange={handleChange}
            name="cor"
          />
         
         
          <button>
            Cadastrar
          </button>
        </form>

        <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
      
        </ul>

        <Link to="/">
          Ir para a Home
        </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;