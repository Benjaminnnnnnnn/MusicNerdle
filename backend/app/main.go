package main

import (
	"backend/internal/services"
	"backend/internal/state"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {

	router := mux.NewRouter()

	router.HandleFunc("/hello", services.HelloWorld)

	loggedRouter := handlers.LoggingHandler(log.Writer(), router)
	corsRouter := handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "PATCH", "DELETE"}),
	)(loggedRouter)

	log.Println("Server listening on http://localhost:8080")
	http.ListenAndServe(":8080", corsRouter)
}

func initializeServer() state.AppState {
	return *new(state.AppState)
}
