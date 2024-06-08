# Plant Health Classification

This project provides plant health information through leaf images by using a deep neural network, specifically a Convolutional Neural Network (CNN). The model takes an image of a leaf as input and classifies it as either healthy, affected by leaf mold, or affected by late blight.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Model Details](#model-details)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Description

This was a college project completed by a team of two members. My role involved training the model, fine-tuning parameters, and optimizing the model. The project utilizes CNN, TensorFlow, and NumPy to create the model. The aim was to minimize loss by adjusting gradient descent, which is calculated using weights and biases, and by fine-tuning parameters such as learning rate and epoch size.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/plant-health-classification.git
   
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
   python classify_image.py --image_path path/to/image.jpg

## Model Details
Architecture: Convolutional Neural Network (CNN)
Framework: TensorFlow
Libraries: NumPy

## Hyperparameters
Kernel/Filter Size: 3x3
Number of Kernels: 64
Pooling Size: 6x6
Learning Rate (alpha): 0.01
Activation Function: ReLU (Rectified Linear Unit)

## Training
The model was trained by fine-tuning parameters such as the learning rate and epoch size to minimize loss through gradient descent.
The activation function ReLU was used to handle maximum colored pixels effectively.

## Screenshots



## Contributing
Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.
1. Fork the repository
2. Create your feature branch (git checkout -b feature/feature-name)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin feature/feature-name)
5. Create a new Pull Request


