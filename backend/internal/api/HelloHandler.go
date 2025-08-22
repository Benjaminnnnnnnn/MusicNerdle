package api

import (
	"net/http"

	"backend/internal/state"
)

func HelloWorld(appState *state.AppState) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		writer.Write([]byte("Hello World"))
	}
}
