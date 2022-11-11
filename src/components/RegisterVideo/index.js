import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { StyledRegisterVideo } from './styles';

function getThumbnail(url) {
  const thumb = `${url.split('v=')[1]}`;
  return `https://img.youtube.com/vi/${thumb.split('&')[0]}/hqdefault.jpg`;
}

function useForm() {
  const [values, setValues] = React.useState({ titulo: '', url: '' });
  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}
const PROJECT_URL = 'https://lrosttaqppkuyxcpbwsh.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb3N0dGFxcHBrdXl4Y3Bid3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODczMzAsImV4cCI6MTk4Mzc2MzMzMH0.AKzmFRKmYAoyVOnwg69_6472jiY349HSvmkWcxUs0wk';

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function RegisterVideo() {
  const formCadastro = useForm({ titulo: '', url: '' });
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!formCadastro.values.titulo) {
              alert('Titulo do video necessario.');
              return;
            }
            if (!formCadastro.values.url) {
              alert('Insira a URL de um video.');
            }
            supabase
              .from('video')
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: 'Musicas',
              })
              .then((response) => {
                console.log(response);
              })
              .catch((err) => {
                console.log(err);
              });

            setFormVisivel(false);
            formCadastro.clearForm();
            //chamar um estado que att a playlist
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>

            <input
              required
              placeholder="Titulo do video"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />

            <input
              required
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
