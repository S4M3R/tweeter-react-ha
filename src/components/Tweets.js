import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { reloadTweets } from "../features/user/tweetsSlice";

import TimeAgo from "javascript-time-ago";
import es from "javascript-time-ago/locale/es";
TimeAgo.addDefaultLocale(es);
const timeAgo = new TimeAgo("es-US");

function Tweets() {
  const { tweets, loading } = useSelector((state) => state.tweets.value);

  var params = useParams();
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(reloadTweets(params.username));
  }, [params]);

  var showTweets = () => {
    return tweets.map((t, i) => (
      <li className="list-group-item" key={t._id}>
        <Link to={"/tweets/" + t.author.username}>
          <i>@{t.author.username} </i>
        </Link>
        -<i className="text-muted">{timeAgo.format(new Date(t.createdAt))}</i>
        <br />
        <b>{t.text}</b>
      </li>
    ));
  };

  return (
    <div>
      <div className="container">
        <h1>Feed de Tweets {params.username && `de @${params.username}`}</h1>
        {loading ? "Cargando..." : ""}
        <ul className="list-group">
          {tweets && tweets.length > 0 && showTweets()}
        </ul>
      </div>
    </div>
  );
}

export default Tweets;
