import React, {useState} from 'react';
import axios from 'axios'


function Create() {
  var [tweet, setTweet] = useState()
  var [alert, setAlert] = useState(false)
  var [message, setMessage] = useState(false)
  const token = localStorage.getItem("token");

  var submit = (e) => {
    e.preventDefault()
    setMessage(true)
    setTweet('')
    axios.post('https://ha-react-proyecto-integrador-back-end.vercel.app/tweets',{text:tweet},{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
    setAlert(true)
    setMessage(false)
  }).catch(err => console.log(err))
  }

  var changeTweet = (tweet) => {
    setTweet(tweet)
    setAlert(false)
    setMessage(false)
  }

  return (   
        <div className="container">
          <h1 className="text-center mt-3 mb-4">Escribe un tweet</h1>
          {alert ? <div className="alert alert-success">Tweet publicado</div> : ''}
          {message ? <div className="alert alert-info">Publicado...</div> : ''}
          <form className="col-md-6 offset-md-3 card py-4" onSubmit={submit}>
            <div className="form-group">
            <label for="tweet">Tweet: </label>
            <textarea className="form-control" id="tweet" placeholder="Escribe algo..." value={tweet} onChange={e => changeTweet(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Publicar</button>
          </form>
        </div>
  );
}

export default Create;
