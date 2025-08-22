package main

import (
	"backend/internal/api"
	"backend/internal/state"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

var (
	appState state.AppState
)

func main() {

	router := mux.NewRouter()

	appState = initializeServer()

	registerApi(router)

	loggedRouter := handlers.LoggingHandler(log.Writer(), router)
	corsRouter := handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "PATCH", "DELETE"}),
	)(loggedRouter)

	log.Println("Server listening on http://localhost:8080")
	http.ListenAndServe(":8080", corsRouter)
}

func initializeServer() state.AppState {

	err := godotenv.Load()

	if err != nil {
		log.Fatal(err)
	}

	return *new(state.AppState)
}

func registerApi(router *mux.Router) {
	registerHelloApi(router)
}

func registerHelloApi(router *mux.Router) {
	router.HandleFunc("/hello", api.HelloWorld(&appState)).Methods("GET")
}
