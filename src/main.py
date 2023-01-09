from fastapi import FastAPI
from pydantic import BaseModel
from model.cnn import predict
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()



origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextIn(BaseModel) : 
    a : float # Acceleration
    s : float # Speed

class PredictionOut(BaseModel) : 
    Age : int

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/predict")
def makepred(a : str, s : str):
    a = np.asarray(a).astype('float32')
    s = np.asarray(s).astype('float32')
    prediction = predict(a,s)
    return {"Age": prediction}

@app.post("/pred",response_model=PredictionOut)
def makepred2(payload: TextIn):
    # a = np.asarray(payload.a).astype('float32')
    # s = np.asarray(payload.s).astype('float32')
    Age = predict(payload.a,payload.s)
    return {"Age": Age}