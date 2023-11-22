<div align="center">
  <a href="">
    <img src="https://github.com/BENAMAR-Zaid/PFE-PPT/assets/105943885/3b0ce9bc-d634-4695-9d8c-960e2a2ab000" alt="Banner" width="720">
  </a>

  <div id="user-content-toc">
    <ul>
      <summary><h1 style="display: inline-block;"> NFL Big Data Bowl Age Prediction Project</h1></summary>
    </ul>
  </div>
  
  <p>Gain insights using NFL Big data Bowl 2023 Dataset to predict players ages</p>
    🛸
    <a href="https://www.kaggle.com/competitions/nfl-big-data-bowl-2023/data" target="_blank">Data on Kaggle</a>
    🌪️
    <a href="https://www.kaggle.com/code/zaidbenamar/predicting-player-s-age-using-cnn-model-with-conv1/notebook" target="_blank">CNN Model Notebook</a>
    🛸
</div>
<br>
<div align="center">
      <a href="https://img.shields.io/badge/Kaggle-035a7d?style=for-the-badge&logo=kaggle&logoColor=white"><img src="https://img.shields.io/badge/Kaggle-035a7d?style=for-the-badge&logo=kaggle&logoColor=white"/></a>
      <img src="https://img.shields.io/github/stars/hamagistral/DataEngineers-Glassdoor?color=blue&style=social"/>
</div>

## 📝 Table of Contents

1. [ Project Overview ](#introduction)
2. [ Project Architecture ](#arch)
3. [ Data Cleaning and Model Building](#dataedamodel)
4. [ Installation ](#installation)
5. [ Contact ](#contact)
<hr>

### 🕵️ Age Prediction Page
![image](https://user-images.githubusercontent.com/105943885/211332109-3bf60e23-bea3-4306-89cc-9350e509f00e.PNG)

![image](https://github.com/BENAMAR-Zaid/Deeplearning-PFM/assets/105943885/181da466-1eb4-41f0-91a9-eaf2c20fd68d)



<a name="introduction"></a>
## 🔬 Project Overview :

### 🎯 Goal :

The goal of this data science project is to develop and deploy a web application for predicting the age of sports players based on their physical performance (speed and acceleration).
I will use a deep learning convolutional neural network (CNN) model to obtain an accurate prediction. The frontend of the application will be developed with Angular and the backend with FastAPI. i will be using Git, Docker and Kubernetes to track changes to the code, work collaboratively with the team and easily manage the application's scalability and availability.

### 🧭 Steps :

In our way to develope and build the age prediction project, we've passed with the following steps : 
#### 1- Took part in a [Kaggle Competition](https://www.kaggle.com/competitions/nfl-big-data-bowl-2023) aimed at predicting a player's age using speed and acceleration columns.
#### 2- Preprocessing of csv data supplied by this competition including the elimnation of duplicate records, the calculation of the Age of players based on the birthday column, and the replacement of null values with the Age mean. [Click here to view Notebook](https://www.kaggle.com/code/zaidbenamar/predicting-player-s-age-using-cnn-model-with-conv1/notebook)
#### 3- Splitting the Dataset into train/test sets
#### 4- Creating the CNN model Layers and optimizing the hyperparameter
#### 5- Model deployment using the FastAPI Framework by adding a cnn.h5 file containing our model, and creating another cnn.py file, which contains the definition of the prediction function that will be called when the API is used. This function will load the trained model and predict the age using the velocity and acceleration data passed as input.
#### 6- Development of an Angular 17 UI to consume the model by sending HTTP requests to the age prediction API, which will be triggered when the user clicks on the prediction button.

<a name="arch"></a>
## 📝 Project Architecture

![Project_Arch](https://github.com/BENAMAR-Zaid/PFE-PPT/assets/105943885/220ea980-a494-4328-b05b-2f98c51a72e2)

### 🛠️ Technologies Used

![Jupyter](https://img.shields.io/badge/Made%20with-Jupyter-orange?style=for-the-badge&logo=Jupyter)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

<a name="dataedamodel"></a>
## 🧹 Data Cleaning and Model Building

Please refer to the respective notebook [Click here to view Notebook](https://www.kaggle.com/code/zaidbenamar/predicting-player-s-age-using-cnn-model-with-conv1/notebook).

<a name="installation"></a>
## 🖥️ Installation : 
Clone the repository:

```
git clone https://github.com/BENAMAR-Zaid/Age-Prediction-using-CNN-Deep-Learning.git
```

### - Run FastAPI

1. Change directory to FastAPI:

```
cd FastAPI
```

2. Install the required packages:

```
pip install -r requirements.txt
```

3. Launch project : 

```
python -m uvicorn main:app --reload
```

#### Run with Docker 

1. Build the Docker Image:

```
docker build -t fastapi-app ./FastAPI
```

2. Run the Docker Container:

```
docker run -p 8000:8000 fastapi-app
```

#### Deploy to Kubernetes

1. Apply Kubernetes Configurations:

```
kubectl apply -f FastAPI/deploy.yaml
kubectl apply -f FastAPI/service.yaml
```

### - Run Angular 17 Dashboard : 

1. Change directory to Angular:

```
cd "SPA - Angular"
```

2. Run the app:

```
ng serve
```

#### Run with Docker 

1. Change directory to Angular:

```
cd "SPA - Angular"
```

2. Build the Docker Image:

```
docker build -t angular-dashboard ./dash
```

3. Run the Docker Container:

```
docker run -p 4200:4200 angular-dashboard
```

#### Deploy to Kubernetes

1. Apply Kubernetes Configurations:

```
kubectl apply -f dash/deployement.yaml
kubectl apply -f dash/service.yaml
```

<a name="contact"></a>
## 📨 Contact Me

[LinkedIn](https://www.linkedin.com/in/zaid-benamar/) •
[Gmail](zaid.benmr@gmail.com)
