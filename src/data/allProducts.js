import { poolTables }     from "../constants/poolTables";
import { soccerTables }   from "../constants/soccerTables";
import { pingPongTables } from "../constants/pingPongTables";
import { cardsTables }    from "../constants/cardsTables";
import { karamboleTables } from "../constants/caromTables";
import { hockeyTables }   from "../constants/hockeyTables";
import { extrasTables }   from "../constants/extrasTables";

const tag = (items, category, route, keywords) =>
  items.map((p) => ({ ...p, category, route, keywords }));

export const allProducts = [
  ...tag(poolTables,      "Mesas de Billar",  "/mesas-de-billar", ["billar","pool","mesa billar","snooker"]),
  ...tag(soccerTables,    "Futbolitos",        "/futbolitos",      ["futbolito","futbol","tejo","soccer"]),
  ...tag(pingPongTables,  "Ping Pong",         "/ping-pong",       ["ping pong","tenis de mesa","tenis","ping","pong"]),
  ...tag(cardsTables,     "Mesas de Cartas",   "/mesas-cartas",    ["cartas","poker","naipes","juego de cartas"]),
  ...tag(karamboleTables, "Carambola",         "/carambola",       ["carambola","carom","karambole","tres bandas"]),
  ...tag(hockeyTables,    "Hockey de Aire",    "/hockey",          ["hockey","aire","air hockey"]),
  ...tag(extrasTables,    "Accesorios",        "/extras",          ["accesorios","tacos","paños","taqueras","taco","chaleco","pano"]),
];
