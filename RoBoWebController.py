from flask import Flask, render_template
import socket
import pickle

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


@app.route("/joystick")
def joystick():
        return render_template('joystick.html')


@app.route("/pose/<a_pose>", methods=['PUT'])
def pose(a_pose):
    move_object = {
        'pose': a_pose
    }
    string_pose = pickle.dumps(move_object)
    # byte_pose = string_pose.encode()
    sock.sendto(string_pose, (UDP_IP, UDP_PORT))
    return '200'


@app.route("/position/<pos>/motor/<motor>", methods=['PUT'])
def position(pos, motor):
    move_object = {
        'pose': "to_position",
        'pos': pos,
        'motor': motor
    }
    string_pose = pickle.dumps(move_object)
    sock.sendto(string_pose, (UDP_IP, UDP_PORT))
    return '200'


if __name__ == '__main__':
    app.run()
