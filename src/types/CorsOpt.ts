export default interface CorsOpt {
  origin: string;
  optionsSuccessStatus: number; // some legacy browsers (IE11, various SmartTVs) choke on 204
}
