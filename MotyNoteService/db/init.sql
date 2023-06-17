-- 建立DB
CREATE DATABASE moty_note;
use moty_note;

CREATE TABLE user (
    uid INT(3) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pwd VARCHAR(100) NOT NULL,
    createDate TIMESTAMP DEFAULT NOW(),
    updateDate TIMESTAMP DEFAULT NOW()
);

-- 建立使用者
INSERT INTO user(name, email, pwd) VALUES ('moty', 'zzser15963@gmial.com', '$2y$09$MMnQV/zCSvQSgtim1Kku1eLpef0f9TV.tbvzVNMa5dVXdDWwBsmbS');
INSERT INTO user(name, email, pwd) VALUES ('violet', 'violet@gmial.com', '$2y$09$MMnQV/zCSvQSgtim1Kku1eLpef0f9TV.tbvzVNMa5dVXdDWwBsmbS');
INSERT INTO user(name, email, pwd) VALUES ('harry', 'harry@gmial.com', '$2y$09$MMnQV/zCSvQSgtim1Kku1eLpef0f9TV.tbvzVNMa5dVXdDWwBsmbS');

SELECT * FROM user;


--建立TABLE
CREATE TABLE note (
    nid INT(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content VARCHAR(2000) DEFAULT NULL,
    uid INT(3)  UNSIGNED ZEROFILL NOT NULL,
    createDate TIMESTAMP DEFAULT NOW(),
    updateDate TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (uid) REFERENCES user(uid)
);

INSERT INTO note(title, content, uid)
VALUES ('文章1', "Title: Serenity in Nature
Content: The sun sets behind the distant mountains, casting a warm glow over the tranquil meadow. A gentle breeze rustles the leaves, creating a soothing melody. Birds chirp in harmony, their songs filling the air with serenity. I take a deep breath, inhaling the scent of wildflowers. Nature's beauty surrounds me, offering solace and peace. In this moment, I find solace in the simplicity of the natural world, a reminder of life's innate wonders. Nature's embrace is a sanctuary for the weary soul, a place where tranquility reigns and worries fade away.
I hope this brief English article meets your needs. If you have any other requests or questions, feel free to let me know.", 001);

INSERT INTO note(title, content, uid)
VALUES ('The Power of Small Acts of Kindness', " In a world often consumed by chaos and negativity, it's easy to overlook the impact of small acts of kindness. A smile, a kind word, or a helping hand may seem insignificant, but they have the power to brighten someone's day. Whether it's holding the door for a stranger or offering a listening ear, these simple gestures can create ripples of positivity. Kindness is contagious; it has the ability to inspire and uplift not only the recipient but also the giver. So, let's embrace the power of small acts of kindness and make the world a better place one gesture at a time.
I hope you find this article meaningful and inspiring. If you have any other requests or questions, feel free to let me know.", 001);

INSERT INTO note(title, content, uid)
VALUES ('Embracing Change: A Path to Growth', "Change is an inevitable part of life. It can be intimidating, causing us to step outside our comfort zones and face the unknown. However, it is through change that we experience growth and discover our true potential. Embracing change requires openness, adaptability, and a willingness to learn. It challenges us to let go of the familiar and embrace new opportunities. Change brings fresh perspectives, expands our horizons, and fuels personal development. Instead of resisting change, let's embrace it as a catalyst for growth. By doing so, we open ourselves up to exciting possibilities and create a life filled with meaning and fulfillment.

I hope this article resonates with you and encourages you to embrace change in your own journey of personal growth. If you have any further requests or questions, please feel free to let me know.", 001);

SELECT * FROM note;