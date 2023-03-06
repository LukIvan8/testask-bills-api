export enum TRANSACTION_TYPE_ENUM {
  INTERNET="internet",
  COMMUNAL="commun",
  EDUCATION="education"
}
export type TRANSCTION_TYPE = `${TRANSACTION_TYPE_ENUM}`

export enum PROVIDER_ENUM {
  FREGAT="fregat-tv",
  KIEVSTAR="kievstar",
  UKRTELEKOM="ukrtelekom",
  COMPROV_1="compov1",
  COMPROV_2="compov2",
  COMPROV_3="compov3",
  EDUPROV_1="eduprov1",
  EDUPROV_2="eduprov2",
  EDUPROV_3="eduprov3",
}


export type PROVIDER_TYPE = `${PROVIDER_ENUM}`
