module.exports = {
	name   : 'user',
	data() {
		return {
			club_data : {
				id   : '',
				name: '',
				longitude : '',
        latitude     : '',
        address: '',
        logoImg: '',
        description: ''
			},
			club_rules: {
				email   : [{
					required: true,
					message : '邮箱不能为空！',
					trigger : 'blur'
				}, {
					type   : 'email',
					message: '邮箱格式不正确！',
					trigger: 'blur'
				}],
				username: [{
					required: true,
					message : '用户名不能为空！',
					trigger : 'blur'
				}],
				birthday: [{
					required: true,
					message : '生日不能为空！',
					trigger : 'change'
				}],
				address : [{
					required: true,
					message : '地址不能为空！',
					trigger : 'change'
				}]
			}
		}
	},
	methods: {
		save_user(userdata) {
			this.$refs[userdata].validate((valid) => {
				if (valid) {
					// console.log(this[userdata]);

					// console.log(this[userdata].status);

					//测试：强制修改用户名或者状态时，接口返回不允许修改的错误信息
					/*if (this[userdata].id) {
					 // this[userdata].username='testupdatename';

					 // this[userdata].status=!this[userdata].status;
					 }*/

					this.$$api_user_saveUser(this[userdata], data => {
						this.$router.push('/demo/user/list');
					});
				}
			});
		},
		reset_user(userdata) {
			this.$refs[userdata].resetFields();
		},

		onChangeDate(val) {
			this.user_data.birthday = val;
		},

		getView(){
		  console.log(this.$route)
			if (this.$route.query.id) {
				this.$$api_club_getClub({
					id: this.$route.query.id
				}, (data) => {
					this.club_data  = data

				});
			}else{
				this.$delete(this.club_data,'id');
				this.$refs.club_data.resetFields();
			}
		}
	},
	mounted() {
		this.getView();
	},

	watch: {
		$route(to, from){
			this.getView();
		}
	}
}
