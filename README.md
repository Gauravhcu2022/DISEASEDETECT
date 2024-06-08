# Plant Health Classification

This project provides plant health information through leaf images by using a deep neural network, specifically a Convolutional Neural Network (CNN). The model takes an image of a leaf as input and classifies it as either healthy, affected by leaf mold, or affected by late blight.

![35ecfe6c-c8a0-482d-a058-4de80798b9e5](https://github.com/Gauravhcu2022/DISEASEDETECT/assets/140634022/c9706b00-e766-4248-ad87-cf4aa2df77da)


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Model Details](#model-details)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Description

This was a college project completed by a team of two members. My role involved training the model, fine-tuning parameters, and optimizing the model. The project utilizes CNN, TensorFlow, and NumPy to create the model. The aim was to minimize loss by adjusting gradient descent, which is calculated using weights and biases, and by fine-tuning parameters such as learning rate and epoch size.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gauravhcu2022/DISEASEDETECT.git
   
2. Navigate to the project directory:
   ```bash
   cd plant-health-classification
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt

## Usage
1. Prepare your dataset and place the images in the data directory.
2. Run the training script:
   ```bash
   python train_model.py
3. To classify a new image, use the classification script:
   ```bash
   python classify_image.py path/to/image.jpg

## Model Details
1. Architecture: Convolutional Neural Network (CNN)
2. Framework: TensorFlow
3. Libraries: NumPy

## Hyperparameters
1. Kernel/Filter Size: 3x3
2. Number of Kernels: 64
3. Pooling Size: 6x6
4. Learning Rate (alpha): 0.01
5. Activation Function: ReLU (Rectified Linear Unit)

## Training
1. The model was trained by fine-tuning parameters such as the learning rate and epoch size to minimize loss through gradient descent.
2. The activation function ReLU was used to handle maximum colored pixels effectively.

## Screenshots
![35ecfe6c-c8a0-482d-a058-4de80798b9e5](https://github.com/Gauravhcu2022/DISEASEDETECT/assets/140634022/e144b458-48b5-4255-9649-05c298adb0b4)

![Screenshot 2024-06-08 222202](https://github.com/Gauravhcu2022/DISEASEDETECT/assets/140634022/9b4ac1d9-dd27-45b0-9dea-d1310f859741)


## Contributing
Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.
1. Fork the repository
2. Create your feature branch (git checkout -b feature/feature-name)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin feature/feature-name)
5. Create a new Pull Request


