package handlers

import (
	"net/http"
)

func HelloWorld(writer http.ResponseWriter, request *http.Request) {
	writer.Write([]byte("Hello World"))
}
