import { useContext } from "react";

import { solicitacaoContext } from "../contexts/solicitacaoContext";

export const useSolicitacao = () => useContext(solicitacaoContext);