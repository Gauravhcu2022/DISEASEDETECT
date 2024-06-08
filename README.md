<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plant Health Classification</title>
</head>
<body>
    <h1>Plant Health Classification</h1>
    <p>This project provides plant health information through leaf images by using a deep neural network, specifically a Convolutional Neural Network (CNN). The model takes an image of a leaf as input and classifies it as either healthy, affected by leaf mold, or affected by late blight.</p>
    
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#model-details">Model Details</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="description">Description</h2>
    <p>This was a college project completed by a team of two members. My role involved training the model, fine-tuning parameters, and optimizing the model. The project utilizes CNN, TensorFlow, and NumPy to create the model. The aim was to minimize loss by adjusting gradient descent, which is calculated using weights and biases, and by fine-tuning parameters such as learning rate and epoch size.</p>

    <h2 id="installation">Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/plant-health-classification.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd plant-health-classification</code></pre>
        </li>
        <li>Install the required dependencies:
            <pre><code>pip install -r requirements.txt</code></pre>
        </li>
    </ol>

    <h2 id="usage">Usage</h2>
    <ol>
        <li>Prepare your dataset and place the images in the <code>data</code> directory.</li>
        <li>Run the training script:
            <pre><code>python train_model.py</code></pre>
        </li>
        <li>To classify a new image, use the classification script:
            <pre><code>python classify_image.py --image_path path/to/image.jpg</code></pre>
        </li>
    </ol>

    <h2 id="model-details">Model Details</h2>
    <ul>
        <li><strong>Architecture:</strong> Convolutional Neural Network (CNN)</li>
        <li><strong>Framework:</strong> TensorFlow</li>
        <li><strong>Libraries:</strong> NumPy</li>
    </ul>

    <h3>Hyperparameters</h3>
    <ul>
        <li><strong>Kernel/Filter Size:</strong> 3x3</li>
        <li><strong>Number of Kernels:</strong> 64</li>
        <li><strong>Pooling Size:</strong> 6x6</li>
        <li><strong>Learning Rate (alpha):</strong> 0.01</li>
        <li><strong>Activation Function:</strong> ReLU (Rectified Linear Unit)</li>
    </ul>

    <h3>Training</h3>
    <ul>
        <li>The model was trained by fine-tuning parameters such as the learning rate and epoch size to minimize loss through gradient descent.</li>
        <li>The activation function ReLU was used to handle maximum colored pixels effectively.</li>
    </ul>

    <h2 id="screenshots">Screenshots</h2>
    <p><img src="screenshots/model_architecture.png" alt="Model Architecture" /></p>
    <p><img src="screenshots/training_loss.png" alt="Training Loss" /></p>
    <p><img src="screenshots/classification_example.png" alt="Classification Example" /></p>

    <h2 id="contributing">Contributing</h2>
    <p>Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.</p>
    <ol>
        <li>Fork the repository</li>
        <li>Create your feature branch (<code>git checkout -b feature/feature-name</code>)</li>
        <li>Commit your changes (<code>git commit -am 'Add some feature'</code>)</li>
        <li>Push to the branch (<code>git push origin feature/feature-name</code>)</li>
        <li>Create a new Pull Request</li>
    </ol>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>
