import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
    const { value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  });

  return (
    <PageDefault>
      <h1>
        Página de Cadastro de Categoria:
        {values.nome}
      </h1>
      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
          setValues(valoresIniciais);
        }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          onChange={handleChange}
          name="nome"
        />

        <FormField
          label="Descricão"
          type="textArea"
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
        />
        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          onChange={handleChange}
          name="cor"
        />

        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>

      )}

      <ul>
        {categorias.map((categoria, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.nome}${indice}`}>
            {categoria.titulo}
          </li>
        ))}

      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
