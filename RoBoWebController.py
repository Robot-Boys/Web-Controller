from flask import Flask, render_template
import socket

app = Flask(__name__)

UDP_IP = "127.0.0.1"
UDP_PORT = 5005

print("UDP target IP:", UDP_IP)
print("UDP target port:", UDP_PORT)


sock = socket.socket(socket.AF_INET,  # Internet
                     socket.SOCK_DGRAM) # UDP

@app.route("/")
def control_panel():
        return render_template('controlPanel.html')


@app.route("/pose/<a_pose>", methods=['PUT'])
def pose(a_pose=None):
    encoded_pose = a_pose.encode()
    sock.sendto(encoded_pose, (UDP_IP, UDP_PORT))
    return '200'


if __name__ == '__main__':
    app.run()
