class User < ApplicationRecord
  validates :name,  presence: true, length: { maximum: 25 }
  validates :email, presence: true, length: { maximum: 100 }, uniqueness: true,
                    format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  has_secure_password

  def channel
    # TODO More clever channel name
    # (self.name + self.email).split('.').join.downcase
    '/user01'
    # self.name
  end
end
